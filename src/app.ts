import { Loan,LoanCar,LoanPerson,LoanStudent,loanApplications } from "./loan";

const approvedLoans: string[] = [];
const rejectedLoans: string[] = [];

Loan.add(new LoanCar('Carlos',35,45000,750,60,3500.00,true))
Loan.add(new LoanPerson('Pedro',18,25000,650,36,1000))
Loan.add(new LoanStudent('Pablo',19,10000,500,20,1500,true))



loanApplications.forEach((application)=>{
    if(application.loanValidate()){
        approvedLoans.push(`${application.applicantName} [APROVADO]`)
    }else{
    rejectedLoans.push((`${application.applicantName} [REPROVADO]
     Pelo motivos- ${application.reasonDisaproved}`))}
})


console.log("Emprestimos Aprovados:");
console.log(approvedLoans.join("\n"));

console.log("\nEmprestimos reprovados:");
console.log(rejectedLoans.join("\n"));