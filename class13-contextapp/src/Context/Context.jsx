import { createContext } from "react";
import UserApi from "../Api/UserApi";
import PostApi from './../Api/PostApi';
import CommentApi from './../Api/CommentApi';

export const DataContext = createContext();

function DataProvider(props) {
    const data = {
        userApi : UserApi(),
        usePost : PostApi(),
        useComment : CommentApi()
    }

    return(
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;