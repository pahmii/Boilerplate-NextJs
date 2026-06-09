'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { makeURIParam } from './make-uri-param'

const DEFAULT_PAGE = 1
const DEFAULT_PER_PAGE = 20

const DEFAULT_PARAM_PAGE = 'page'
const DEFAULT_PARAM_PER_PAGE = 'per_page'

type ParamName = {
  page?: string
  perPage?: string
}

export const usePagination = ({
  page: propsParamPage,
  perPage: propsParamPerPage,
}: ParamName = {}) => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParam = useSearchParams()

  const paramPage = propsParamPage ?? DEFAULT_PARAM_PAGE
  const paramPerPage = propsParamPerPage ?? DEFAULT_PARAM_PER_PAGE

  const getParam = (paramName: string, defaultValue: number) => {
    const param = searchParam.get(paramName)

    if (param === null) {
      return defaultValue
    }

    const numberify = Number(param)

    return isNaN(numberify) ? defaultValue : numberify
  }

  const page = getParam(paramPage, DEFAULT_PAGE)

  const perPage = getParam(paramPerPage, DEFAULT_PER_PAGE)

  const getParamObject = useCallback(
    (paramName: string, value?: number) => {
      const sp = new URLSearchParams(searchParam)

      sp.set(paramName, value?.toString() ?? '')

      if (value === undefined) {
        sp.delete(paramName)
      }

      return Object.fromEntries(sp)
    },
    [searchParam],
  )

  const getPageParamObject = (page?: number) => getParamObject(paramPage, page)
  const getPerPageParamObject = (perPage?: number) =>
    getParamObject(paramPerPage, perPage)

  const pushPage = (page?: number) =>
    router.push(makeURIParam(pathName, getPageParamObject(page)))

  const pushPerPage = (perPage?: number) =>
    router.push(makeURIParam(pathName, getPerPageParamObject(perPage)))

  return {
    page,
    perPage,
    getPageParamObject,
    getPerPageParamObject,
    pushPage,
    pushPerPage,
    paramPage,
    paramPerPage,
  }
}
