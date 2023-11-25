abstract class Loan {
    reasonDisaproved:string[] = [];
    constructor(
        public applicantName: string,
        public applicantAge: number,
        public requestedAmount: number,
        public valueInstallments:number,
        public numInstallments:number,
        public monthlyIncome: number) {}
        
        abstract loanValidate():boolean;
        
        static add(loan:Loan):void{
            loanApplications.push(loan)
            
        }
    }
const loanApplications: Loan[] = [];

class LoanPerson extends Loan{
    
    loanValidate(): boolean {
        const ageValid= this.applicantAge>=18
        const loanAmoutValid= this.requestedAmount=== this.valueInstallments *this.numInstallments
        const incomeValid=this.monthlyIncome>2500.00  

        if(!ageValid){
            this.reasonDisaproved.push("Idade inferior a 18 anos.")
        }
        if(!loanAmoutValid){
            this.reasonDisaproved.push('Valor do empréstimo ou parcelas inválidas.')
        }
        if(!incomeValid){
            this.reasonDisaproved.push('Renda mensal insuficiente.')
        }

        const result= ageValid && loanAmoutValid && incomeValid
        return result 
    }
}
class LoanStudent extends Loan{
    constructor(
        applicantName: string,
        applicantAge: number,
        requestedAmount: number,
        valueInstallments:number,
        numInstallments:number,
        monthlyIncome: number,
        protected registryCollege:boolean
        ) {
            super(applicantName,
                applicantAge,
                requestedAmount,
                valueInstallments,
                numInstallments,
                monthlyIncome)
        }

    loanValidate(): boolean {
        const ageValid= this.applicantAge>=18 && this.applicantAge<=30
        const loanAmoutValid= this.requestedAmount=== this.valueInstallments *this.numInstallments
        const incomeValid=this.monthlyIncome>1500
        const collegeValid= this.registryCollege ==true
        
        if(!ageValid){
            this.reasonDisaproved.push("Idade inferior a 18 anos.")
        }
        if(!loanAmoutValid){
            this.reasonDisaproved.push('Valor do empréstimo ou parcelas inválidas.')
        }
        if(!incomeValid){
            this.reasonDisaproved.push('Renda mensal insuficiente.')
        }
        if(!collegeValid){
            this.reasonDisaproved.push('É necessario esta matriculado em uma Faculdade')
        }
        
        const result= ageValid && loanAmoutValid && incomeValid && collegeValid
        return result 
    }
}
class LoanCar extends Loan{
    constructor(
        applicantName: string,
        applicantAge: number,
        requestedAmount: number,
        valueInstallments:number,
        numInstallments:number,
        monthlyIncome: number,
        protected driveLicense:boolean
        ) {
            super(applicantName,
                applicantAge,
                requestedAmount,
                valueInstallments,
                numInstallments,
                monthlyIncome)
        }

    loanValidate(): boolean {
        const ageValid= this.applicantAge>=18
        const loanAmoutValid= this.requestedAmount=== this.valueInstallments *this.numInstallments
        const incomeValid=this.monthlyIncome>3000
        const driveLicenseValid= this.driveLicense ==true
        if(!ageValid){
            this.reasonDisaproved.push("Idade inferior a 18 anos.")
        }
        if(!loanAmoutValid){
            this.reasonDisaproved.push('Valor do empréstimo ou parcelas inválidas.')
        }
        if(!incomeValid){
            this.reasonDisaproved.push('Renda mensal insuficiente.')
        }
        if(!driveLicenseValid){
            this.reasonDisaproved.push('É necessario esta matriculado em uma Faculdade')
        }
        
        const result= ageValid && loanAmoutValid && incomeValid && driveLicenseValid
        return result 
    }
}
export { Loan, LoanPerson, LoanStudent, LoanCar, loanApplications }