import {Address, User} from './types'

const promisify = <T>(data: T) => new Promise<T>(resolve => {
    setTimeout(() => resolve(data), 1000)
})

export function getUser (id: number) {
    if (id !== 11) {
        throw new Error('user not found')
    }

    const user: User = {
        id: 11,
        name: "Mirek",
        lastName: "Nowak",
        age: 22,
    }

    return promisify(user)
}

export function getAddressForUser(id: number) {
    if (id !== 11) {
        throw new Error('user not found')
    }

    const address: Address =  {
        id: 10,
        city: "Wałcz",
    }

    return promisify(address)
}

export function toLowerCase(data: string) {
    return data.toLowerCase()
}

export function checkIfResultCorrect(data: string) {
    return promisify(data === "wałcz")
}
