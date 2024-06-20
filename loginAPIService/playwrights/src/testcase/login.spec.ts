import { test } from "@playwright/test";
import { GetLoginApi } from "../page-object/login";

const dataTest = require ('../../public/dataTest/login.json')
const expectedResult = require ('../../public/expectResults/responseLogin.json')

test.describe('Api for login',() => {

    let onLoginAPI : GetLoginApi = new GetLoginApi()
    test.beforeEach(async () => {

    })
    
    test('Login Success',async()=>{
       let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.successLogin)
       console.log(await response.body)
       await onLoginAPI.verifyPostLoginSuccessResponse(response.statusCode,response.body,expectedResult.successResponse)
    })

    test('Platform is Empty',async()=>{
        let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.platformisEmpty)
        console.log(await response.body)
        await onLoginAPI.verifyPlatformisEmptyResponse(response.statusCode,response.body,expectedResult.platformEmptyResponse)
     })

    test('Platform is Invalid',async()=>{
        let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.platformisInvalid)
        console.log(await response.body)
        await onLoginAPI.verifyPlatformisInvalid(response.statusCode,response.body,expectedResult.platformisInvalidResponse)
     })

     test('Username is Empty',async()=>{
        let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.usernameisEmpty)
        console.log(await response.body)
        await onLoginAPI.verifyUsernameisEmpty(response.statusCode,response.body,expectedResult.usernameisEmptyResponse)
     })

     test('Username is Lowcase',async()=>{
        let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.usernameLowcaseInvalid)
        console.log(await response.body)
        await onLoginAPI.verifyUsernameLowcase(response.statusCode,response.body,expectedResult.usernameLowcaseInvalidResponse)
     })

     test('Password is Empty',async()=>{
        let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.passwordisEmpty)
        console.log(await response.body)
        await onLoginAPI.verifyPasswordisEmpty(response.statusCode,response.body,expectedResult.passwordisEmptyResponse)
     })

     test('Password is Invalid',async()=>{
        let response =  await onLoginAPI.callPostlogin(dataTest.endpoint.post,dataTest.passwordisInvalid)
        console.log(await response.body)
        await onLoginAPI.verifyPasswordisInvalid(response.statusCode,response.body,expectedResult.passwordisInvalidResposne)
     })
})