import {FullConfig } from '@playwright/test'
import { env } from './parseEnv'
import dotenv from 'dotenv'

async function globalSetup(config:FullConfig) {
   if (process.env.test_env){
    dotenv.config({path: env('COMMON_CONFIG_FILE')})
    dotenv.config({
        path: `${env('ENV_PATH')}${process.env.test_env}.env`,
        override: true
    })
   } 
}
export default globalSetup;