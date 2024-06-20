import { expect, APIRequestContext, request } from "@playwright/test";
import ENV from "../../utils/env";


export class GetLoginApi {

    private async createContextIssueHTTPRequest() {
        return await request.newContext({
            baseURL: ENV.BASE_URL_LOGIN
        })
    }
    async callPostlogin(path: any, body: any) {
        const contextHTTP = await this.createContextIssueHTTPRequest()
        console.log('url ===>', contextHTTP)
        const result = await contextHTTP.post(path,
            {
                data: body
            })
        return {
            statusCode: result.status(),
            statusText: result.statusText(),
            body: await result.json(),
            header: await result.headers()
        }
    }

    async verifyPostLoginSuccessResponse(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(200)
        expect(actualResult.access_token).toEqual(expect.any(String))
        expect(actualResult.refresh_token).toEqual(expect.any(String))
        expect(actualResult.platform).toEqual(expectedResult.platform)
    }

    async verifyPlatformisEmptyResponse(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(400)
        expect(actualResult.message).toEqual(expectedResult.message)
        expect(actualResult.error).toEqual(expect.any(String))
        expect(actualResult.statusCode).toEqual(expectedResult.statusCode)
    }

    async verifyPlatformisInvalid(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(400)
        expect(actualResult.message).toEqual(expectedResult.message)
        expect(actualResult.error).toEqual(expect.any(String))
        expect(actualResult.statusCode).toEqual(expectedResult.statusCode)
    }

    async verifyUsernameisEmpty(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(400)
        expect(actualResult.message).toEqual(expectedResult.message)
        expect(actualResult.error).toEqual(expect.any(String))
        expect(actualResult.statusCode).toEqual(expectedResult.statusCode)
    }

    async verifyUsernameLowcase(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(400)
        expect(actualResult.message).toEqual(expectedResult.message)
        expect(actualResult.error).toEqual(expect.any(String))
        expect(actualResult.statusCode).toEqual(expectedResult.statusCode)
    }

    async verifyPasswordisEmpty(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(400)
        expect(actualResult.message).toEqual(expectedResult.message)
        expect(actualResult.error).toEqual(expect.any(String))
        expect(actualResult.statusCode).toEqual(expectedResult.statusCode)
    }

    async verifyPasswordisInvalid(statusCode: any, actualResult: any, expectedResult: any) {
        expect(statusCode).toBe(400)
        expect(actualResult.message).toEqual(expectedResult.message)
        expect(actualResult.error).toEqual(expect.any(String))
        expect(actualResult.statusCode).toEqual(expectedResult.statusCode)
    }
}