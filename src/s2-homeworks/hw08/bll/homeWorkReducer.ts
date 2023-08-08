import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    console.log(action)
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = state.map(el => ({...el}))
            return stateCopy.sort((a,b) => {
                if (action.payload === 'up') {
                    return a.name < b.name ? -1 : 1 // Aleksajnder Ciclop Boris  A = 92 C = 94  B = 93     2 -> 4 -> 6
                } else {
                    return a.name < b.name ? 1 : -1
                }
            })
                // need to fix
        }
        case 'check': {
            const stateCopy = state.map(el => ({...el}))
            return stateCopy.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
