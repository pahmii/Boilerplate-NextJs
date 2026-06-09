import queryString from 'query-string'

type Empty = null | undefined
type NonEmpty = string | number

type AcceptableValue = Empty | NonEmpty | NonEmpty[]

export const makeURIParam = (
  pathName: string,
  query: Record<string, AcceptableValue>,
) =>
  queryString.stringifyUrl(
    {
      url: pathName,
      query,
    },
    {
      skipNull: true,
      skipEmptyString: true,
      arrayFormat: 'comma',
    },
  )
