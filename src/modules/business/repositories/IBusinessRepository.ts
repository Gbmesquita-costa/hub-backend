import { CreateBusiness } from "../dtos/ICreateBusinessDTO"

interface IBusinessRepository {
    createBusiness: ({ name, website, cnpj, userId }: CreateBusiness) => Promise<void>
    getAllBusiness: (id: string) => Promise<CreateBusiness[]>
    findBusinessById: (id: string) => Promise<CreateBusiness>
    updateBusiness: ({ id, name, website, cnpj }: CreateBusiness) => Promise<CreateBusiness>
    deleteBusiness: (id: string) => Promise<CreateBusiness>
}

export { IBusinessRepository }