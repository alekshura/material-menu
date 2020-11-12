import * as user from 'src/app/mocks/user.json'
import * as limits from 'src/app/mocks/limits.json'

export const mockUrls = [
    {
      url: '/api/authorization/logon',
      json: user
    },
    {
      url: '/api/limits',
      json: limits
    }
  ];