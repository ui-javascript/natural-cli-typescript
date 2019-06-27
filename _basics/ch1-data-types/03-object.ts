declare function create(o: object | null): void

create({ 
    prop: 0,
    prop2: 2 
})
create(null)

// Error
// create(42)
// create("string")
// create(false) 
// create(undefined)