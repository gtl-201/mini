import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';




const User = () => {

    const [data, setData] = useState({});
    useEffect(() => {
        const jwt = Cookie.get('token');
        console.log(jwt)
        if (jwt === undefined) {
            window.location.href = '/login'
        }
        else {
            axios({
                baseURL: 'https://gateway.bangchamcong.vn',
                method: 'get',
                url: '/api/account',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${jwt}`,
                },
            }).then((e) => {
                setData(e.data);
                console.log(e.data.createdDate);
            })
                .catch(e => console.error(e));
        }


    }, []);


    // const RenderField = (fieldName)=>{
    //     let displayName = fieldName;
    //     let fieldValue = data[fieldName];
    //     return (
    //         <div
    //             key={fieldName}
    //             style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}
    //         >
    //             <div
    //                 style={{ fontWeight: 'bold' }}
    //             >
    //                 {displayName + ' :'}
    //             </div>
    //             <div
    //                 style={{ fontSize: 12, marginLeft: 5, width: '70%' }}
    //             >
    //                 {fieldValue}
    //             </div>
    //         </div>
    //     );
    // };

    // const renderFields = Object.keys(data).map(RenderField).filter((x) => x);

    return (
        <div class='bg-dark mt--6 pt-0' style={{widh: '100vw', height: '94.6vh', marginTop: -30}}>
            <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div class="card p-4" style={{width: '350px',
                backgroundColor: '#efefef',
                border: 'none',
                cursor: 'pointer',
                marginTop: 40}}>
                    <div class=" image d-flex flex-column justify-content-center align-items-center">
                        <button style={{ height: '140px',width: '140px',borderRadius: '50%'}} class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button>
                        <h4 class="name mt-3 mb--2 font-weight-bold text-lg" style={{ fontSize: '22px', fontWeight: 'bold'}}>{data.firstName + ' ' + data.lastName}</h4>
                        <span class="idd">Login: @{data.login}</span>
                        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span class="idd1">Email: {data.email}</span>
                            <span><i class="fa fa-copy"></i></span>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span class="number text-center">
                                Last modifind at: <span class="follow">{data.lastModifiedDate}</span>
                            </span>
                        </div>
                        <div class=" d-flex mt-2">
                            <a href='/' class="btn btn-dark">Back Home</a>
                        </div>
                        <div class="text mt-3">
                            <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.</span>
                            <br></br>
                            <span>Artist/ Creative Director by Day #NFT minting@ with FND night. </span>
                        </div>
                        <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
                        <div class=" px-2 rounded mt-4 date "> <span class="join">Joined {data.createdDate}</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;