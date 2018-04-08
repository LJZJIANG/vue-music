import * as types from './mutation-types'

export const setUser = ({commit},data)=>{
    commit(types.USER_STATUS,data)
}