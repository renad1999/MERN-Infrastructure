import * as usersService from '../utilities/users-service';
import { checkToken } from '../utilities/users-service';

export default function OrderHistoryPage() {
async function handleCheckToken(){
    const expDate = await checkToken();
    console.log(expDate);
}

    return(
        <>
        <h1> OrderHistoryPage</h1>
        <button onClick={handleCheckToken}>Check When Login Expires</button>
        </>
    );


}