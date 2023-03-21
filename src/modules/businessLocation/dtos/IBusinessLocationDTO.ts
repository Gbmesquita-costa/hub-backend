interface CreateBusinessLocation {
    id?: string;
    name: string;
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    businessId?: string;
}

export { CreateBusinessLocation }