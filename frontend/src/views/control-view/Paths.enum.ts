export enum AbleFor {
    Inseminate = 'Inseminate',
    Diagnosis = 'Diagnosis',
    Drying = 'Drying',
    Childbirth = 'Childbirth'
}

export namespace paths {
    export function getPaths(ableFor: AbleFor): string {
        let case_
        switch (ableFor) {
            case AbleFor.Inseminate:
                case_ = 'insemination'
                break
            case AbleFor.Diagnosis:
                case_ = 'diagnosis'
                break
            case AbleFor.Drying:
                case_ = 'drying'
                break
            case AbleFor.Childbirth:
                case_ = 'childbirth'
                break
        }
        return `/${case_}Register`
    }
}
