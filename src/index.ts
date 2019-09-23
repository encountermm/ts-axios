import { AxiosRequestConfig } from './types/index'
import { transformRequest } from './helps/data'
import xhr from './xhr'
import { buildURL } from './helps/url'

function axios(config: AxiosRequestConfig): void {
  // TODO
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
export default axios
