// 로그인 사용자 모델
export default interface UserTypes {
    userId: string;
    pw: string;

    name : string;
    email:string;
    phone: string;
    
    interestFieldIdList: [string];
    teamIdList: [string];
}