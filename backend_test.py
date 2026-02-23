#!/usr/bin/env python3

import requests
import sys
import os
import json
from datetime import datetime
from typing import Dict, Any, List

class BackendTester:
    def __init__(self, base_url: str):
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results: List[Dict[str, Any]] = []

    def log_test(self, name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            
        result = {
            "test_name": name,
            "success": success,
            "details": details,
            "response_data": response_data,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {name}")
        if details:
            print(f"   {details}")
        if not success and response_data:
            print(f"   Response: {response_data}")

    def test_api_endpoint(self, method: str, endpoint: str, expected_status: int = 200, 
                         data: Dict = None, headers: Dict = None) -> tuple[bool, Any]:
        """Test a single API endpoint"""
        url = f"{self.base_url}/api{endpoint}"
        
        try:
            if method.upper() == 'GET':
                response = self.session.get(url, headers=headers or {})
            elif method.upper() == 'POST':
                response = self.session.post(url, json=data, headers=headers or {'Content-Type': 'application/json'})
            else:
                return False, f"Unsupported method: {method}"

            success = response.status_code == expected_status
            
            try:
                response_json = response.json()
            except:
                response_json = {"text": response.text, "status": response.status_code}
                
            return success, response_json
            
        except Exception as e:
            return False, str(e)

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        success, response = self.test_api_endpoint('GET', '/')
        
        if success and isinstance(response, dict) and response.get('message'):
            self.log_test("Root API endpoint", True, "API is accessible")
        else:
            self.log_test("Root API endpoint", False, "API root not responding correctly", response)

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test POST /status
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        
        success, response = self.test_api_endpoint('POST', '/status', 200, test_data)
        
        if success and isinstance(response, dict) and 'id' in response:
            self.log_test("POST /status", True, f"Status check created with ID: {response['id']}")
        else:
            self.log_test("POST /status", False, "Status check creation failed", response)
        
        # Test GET /status
        success, response = self.test_api_endpoint('GET', '/status')
        
        if success and isinstance(response, list):
            self.log_test("GET /status", True, f"Retrieved {len(response)} status checks")
        else:
            self.log_test("GET /status", False, "Status check retrieval failed", response)

    def test_contact_endpoint(self):
        """Test the main contact form endpoint"""
        # Test with valid data
        valid_contact_data = {
            "name": "John Doe",
            "company": "Test Corporation",
            "vertical": "Industrial Sourcing", 
            "message": "This is a test contact message for HomeScape Group."
        }
        
        success, response = self.test_api_endpoint('POST', '/contact', 200, valid_contact_data)
        
        if success and isinstance(response, dict) and response.get('id'):
            self.log_test("POST /contact (valid data)", True, 
                         f"Contact created successfully with ID: {response['id']}")
        else:
            self.log_test("POST /contact (valid data)", False, 
                         "Contact creation failed", response)

        # Test with missing required fields
        invalid_data = {
            "name": "",
            "company": "Test Corp", 
            "vertical": "",
            "message": ""
        }
        
        success, response = self.test_api_endpoint('POST', '/contact', 422, invalid_data)
        
        if success and response.get('detail'):
            self.log_test("POST /contact (validation)", True, 
                         "API correctly rejected invalid data with validation errors")
        else:
            self.log_test("POST /contact (validation)", False, 
                         "API validation not working properly", response)

    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = requests.options(f"{self.base_url}/api/contact", 
                                      headers={'Origin': 'https://homescape-partner.preview.emergentagent.com'})
            
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            if cors_headers['Access-Control-Allow-Origin']:
                self.log_test("CORS Configuration", True, "CORS headers present")
            else:
                self.log_test("CORS Configuration", False, "CORS headers missing", cors_headers)
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"CORS test failed: {str(e)}")

    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Backend API Tests for: {self.base_url}")
        print("=" * 60)
        
        self.test_root_endpoint()
        self.test_status_endpoints()
        self.test_contact_endpoint()
        self.test_cors_headers()
        
        print("\n" + "=" * 60)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} test(s) failed")
            return False

    def get_summary(self) -> Dict[str, Any]:
        """Get test summary for reporting"""
        failed_tests = [test for test in self.test_results if not test['success']]
        
        return {
            "total_tests": self.tests_run,
            "passed_tests": self.tests_passed,
            "failed_tests": len(failed_tests),
            "success_rate": f"{(self.tests_passed / self.tests_run * 100):.1f}%" if self.tests_run > 0 else "0%",
            "failed_test_details": failed_tests,
            "all_results": self.test_results
        }

def main():
    # Get backend URL from environment or use default
    backend_url = os.environ.get('REACT_APP_BACKEND_URL', 'https://homescape-partner.preview.emergentagent.com')
    
    tester = BackendTester(backend_url)
    success = tester.run_all_tests()
    
    # Print detailed summary
    summary = tester.get_summary()
    print(f"\n📋 Detailed Summary:")
    print(f"   Success Rate: {summary['success_rate']}")
    print(f"   Total Tests: {summary['total_tests']}")
    print(f"   Passed: {summary['passed_tests']}")
    print(f"   Failed: {summary['failed_tests']}")
    
    if summary['failed_tests'] > 0:
        print(f"\n❌ Failed Tests:")
        for failed in summary['failed_test_details']:
            print(f"   - {failed['test_name']}: {failed['details']}")
    
    return 0 if success else 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)