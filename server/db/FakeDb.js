import { generateId } from "../utils/GenerateId"

class FakeDb {
    cats = [{ name: 'Oliver', description: 'Oliver & Company', id: generateId() }, { name: 'Aristocats', description: "Aristocats", id: generateId() }]

    dogs = [{ name: 'Duke', description: 'Dukem', id: generateId() }, { name: 'Marley', description: "Marley & Me", id: generateId() }]

    burgers = [{ name: 'Triple Bypass', description: 'You will die', id: generateId() }, { name: 'Vegan Shit', description: "This stuff is nasty", id: generateId() }]
}

export const fakeDb = new FakeDb()