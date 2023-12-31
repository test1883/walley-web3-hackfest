import styled from 'styled-components';

import { VmComponent } from '@/components/vm/VmComponent';
import { openToast } from '@/components/lib/Toast';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Styles = {
    Root : styled.div`
       
         background: url("https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg?w=826&t=st=1692784084~exp=1692784684~hmac=640a88623947cac46d90337f2d03281af01efcdcd5aa64901719774754bd75b3");
         background-size: cover;
         display: flex;
         font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
         flex-direction: column;
         padding: 0;
         align-items: center;
         justify-content: center;
         box-sizing: border-box;
         height: 100vh;
         width: 100vw;
         @media screen and (max-width: 600px) {
           background-position: 70% 70%;
         }
     `,
   
    WalleyTitle : styled.div`
         text-align: left;
         font-weight: 900;
         width: 100%;
         font-size: 30px;
         margin: 0px;
         padding: 5px;
         color: #fff; 
         @media screen and (max-width: 600px) {
           text-align: center;
         }
     `,
   
    WalleyIndexContainer : styled.div`
         height: 100vh;
         color: #fff;
         width: 100%;
         padding: 20px;
         display: flex;
         flex-direction: column;
     `,
   
    WalleyIndexBody : styled.div`
       display: flex;
       flex-direction: column;
       text-align: left;
       width: 500px;
       padding-left: 50px;
       @media screen and (max-width:600px) {
         width: 100%;
         padding-left: 0;
         align-items: center;
       }
     `,
   
    WalleyIndexDesc : styled.div`
         color: #fff;
         font-weight: 500;
         font-size: 50px;
         padding-bottom: 10px;
         margin-top: 50px;
         @media screen and (max-width: 400px) {
           margin-top: 150px;
           font-size: 40px;
         }
     `,
   
    WalleyIndexMain : styled.div`
         margin-top: 20px;
         width: 100%;
         padding: 20px;
         @media screen and (max-width: 600px) {
           text-align: center;
           position: fixed;
           bottom: 0px;
           left: 0px;
         }
         &>span {
           font-weight: 500;
           @media screen and (max-width: 600px) {
             display: none;
             width: 0px;
           }
         }
         &>button {
             border: none;
             background: #FA9703;
             color: white;
             margin-left: 20px;
             transition: all .2s ease-out;
             border-radius: 20px;
             &:hover {
               scale: 1.05;
               background:#FA9703;
             }
             &:active {
               background:#FA9703;
             }
             @media screen and (max-width: 600px) {
               width: 100%;
               height: 50px;
               font-size: 15px;
               display: block;
               margin-left: 0px;
             }
         }
     `,
   
    WalleyHomeContainer : styled.div`
         background: url("https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg?w=826&t=st=1692784084~exp=1692784684~hmac=640a88623947cac46d90337f2d03281af01efcdcd5aa64901719774754bd75b3");
         background-size: cover;
         font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
         height: 100vh;
         width: 100vw;
         ::-webkit-input-placeholder { /* Edge */
          color: rgb(255, 255, 255, 0.5);

        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */ 
          color: rgb(255, 255, 255, 0.5);
        }

         ::placeholder {
           color: rgb(255, 255, 255, 0.5);
         }
         color: #fff;
         display: flex;
         flex-direction: column;
         position: fixed;
         top: 0px;
         @media screen and (max-width: 600px) {
           background-position: 70% 70%;
         }
         .red {
           background-color: #FF6A4C;
         }
         .grey {
          background-color: rgb(66, 66, 66);
         }
         .orange {
           background-color: #FA9703;
         }
     `,
   
    WalleyHomeHeader : styled.div`
         width: 100%;
         font-size: 25px;
         font-weight: 900;
         padding: 8px;
         padding-bottom: 0px;
         color: #fff;
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         &>p {
           text-align: center;
         }
     
     `,
   
    WalleyHomeMain : styled.div`
         padding: 15px;
         display: flex;
         flex-direction: row;
         width: 100%;
         height: 100%;
         align-items: space-between;
         @media screen and (max-width: 600px) {
           flex-direction: column;
         }
     `,
   
    WalleyNavbar : styled.div`
         margin: 5px 0px;
         padding: 15px;
         display: flex;
         flex-direction: column;
         position: relative;
         left: 0px;
         height: 100%;
         text-align: left;
         &>svg {
           text-align: left; 
           padding: 0;
           width: 24px;
           display: none;
         }
         @media screen and (max-width: 600px) {
             flex-direction: row;
             justify-content: space-evenly;
             align-items: center;
             text-align: center;
             font-size: 12px;
             height: 50px;
         }
     `,
   
    WalleyNavbarButton : styled.button`
         border: none;
         text-align: center;
         background: none;
         color: #fff;
         padding:7px;
         font-weight: 800;
         border-radius: 20px;
         border: 0px;
         box-shadow: rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px;
         
     `,
   
    NavLine : styled.span`
       width: 1px;
       height: 70px;
       background: rgb(255, 255, 255, 0.4);
       margin: 4px 0 4px 0;
       @media screen and (max-width: 600px) {
         display: none;
       }
     `,
    NavLineLast : styled.span`
       width: 1px;
       height: 100%;
       background: rgb(255, 255, 255, 0.4);
       margin: 4px 0 4px 0;
       @media screen and (max-width: 600px) {
         display: none;
       }
     `,
   
    WalleyHomeBody : styled.div`
       width: 100%;
       padding: 0px 8px;
       &>.txn {
         text-align: left;
         font-size: 15px;
         font-weight: 600;
         padding: 20px 0px 0px 0px;
       }
     `,
   
    WalleyBalance : styled.span`
       padding: 8px;
       font-weight: 600;
       font-size: 15px;
       width: 170px;
       background-color: #FA9703;
       border-radius: 30px;
       text-align: center;
       box-shadow: rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px;
       &>svg {
         fill: #fff;
       }
       @media screen and (max-width: 600px) {
        font-size: 12px;
        width: 130px;
       }
     `,
   
    WalleyLoading : styled.div`
       width: 100vw;
       height: 100vh;
       position: fixed;
       top: 0;
       left: 0;
       z-index: 1000000;
       background: rgb(66, 66, 66, 0.7);
       display: flex;
       justify-content: center;
       align-items: center;
       test-align: center;
       font-weight: 400;
     `,
   
    WalleyModal : styled.div`
       width: 400px;
       height: 400px;
       background: rgb(66, 66, 66);
       box-shadow: rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       text-align: center;
       border-radius: 20px;
       &>img {
         width: 70px;
         height: 70px;
       }
       @media screen and (max-width: 500px) {
         width: 90vw;
         height: 90vw;
       }
     
     `,
   
    WalleyButton : styled.button`
       color: white;
       display: block;
       width: 100%;
       padding: 7px;
       border-radius: 20px;
       border: 0px;
       box-shadow: rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px;
       font-weight: 500;
     
     `,
   
    WalleyHomeOverlay : styled.div`
       width: 100vw;
       height: 100vh;
       position: fixed;
       top: 0;
       left: 0;
       z-index: 1000000;
       background: rgb(66, 66, 66, 0.7);
       display: flex;
       justify-content: center;
       align-items: center;
       test-align: center;
     `,
   
    WalleyHomeForm : styled.div`
       background: rgb(66, 66, 66);
       box-shadow: rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px;
       width: 400px;
       border-radius: 20px;
       text-align: left;
       display: grid;
       grid-gap: 5px;
       grid-template-columns: repeat(1, 1fr);
       flex-direction: column;
       padding: 20px;
       @media screen and (max-width: 500px) {
          width: 90vw;
       }
       &>input {
         margin-bottom: 5px;
         border: 1px solid rgb(255, 255, 255, 0.4);
       }
       div[type="button"] {
         border-radius: 20px;
         background: none;
         border: 2px solid #555;
         color: white;
       }
     `,
   
    WalleyStoreOverlay : styled.div`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000000;
        background: rgb(66, 66, 66, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        test-align: center;
    `,
    WalleyStoreForm : styled.div`
        background: rgb(66, 66, 66);
        box-shadow: rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px;
        width: 400px;
        border-radius: 20px;
        text-align: left;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        padding: 20px;
        
        @media screen and (max-width: 500px) {
          width: 90vw;
          height: 90vw;
        }
        &>input {
          margin-bottom: 5px;
          border: 1px solid rgb(255, 255, 255, 0.4);
        }
        div[type="button"] {
          border-radius: 20px;
          background: none;
          border: 2px solid rgb(255, 255, 255, 0.4);
          color: white;
        }
    `,
   
    WalleyImageContainer : styled.div`
       display: flex;
       align-items: center;
       justify-content: center;
       text-align: center;
       width: 200px;
       height: 200px;
       @media screen and (max-width: 600px) {
         width: 100%;
         height: 50%;
       }
     `,
   
    WalleyStoreImage : styled.img`
       maring: 0 auto;
       width: 200px;
       text-align: center;
     `,
   
    WalleyInput : styled.input`
       display: block;
       width: 100%;
       padding: 6px 10px;
       border-radius: 20px;
       background: none;
       border: 1px solid rgb(255, 255, 255, 0.4);
       color: white;
     `,
   
    WalleyLabel : styled.p`
       width: 100%;
       margin-bottom: 0px;
     `,
   
    WalleyStoreButton : styled.button`
       border: none;
       background: none;
       color: #5290f2;
       display: block;
     `,
   
    WalleyTransactions : styled.div`
       height: 400px;
       margin-bottom: 20px;
       overflow-y: scroll;
       padding: 0px 15px 15px 15px;
       display: grid;
       grid-gap: 20px;
       grid-template-columns: repeat(2, 1fr);
       justiy-content: space-evenly;
       @media screen and (max-width: 750px)  and (max-aspect-ratio: 1/1){
         grid-template-columns: repeat(1, 1fr);
         height: 300px;
       }
       &::-webkit-scrollbar {
         width: 7px;
       }
     
       &::-webkit-scrollbar-track {
         background: rgb(66,66,66,0.6); 
       }
       
       &::-webkit-scrollbar-thumb {
         background: #424242; 
       }
     `,
   
    WalleySearch : styled.div`
       display: flex;
       padding: 0px 10px;
       flex-direction: row;
       @media screen and (max-width: 600px) {
         flex-direction: column-reverse;
       }
       &>button {
         width: 150px;
         margin-right: 20px;
         font-size: 16px;
         @media screen and (max-width: 600px) {
           width: 100%;
           margin-right: 0px;
           font-size: 13px;
           margin-top: 5px;
         }
       }
       &>input {
         font-size: 16px;
         @media screen and (max-width: 400px) {
           width: 100%;
           font-size: 13px;
         }
       }
     `,
   
    TransactionCard : styled.div`
       background: rgb(66, 66, 66, 0.6);
       box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
       border: 1px solid #424242;
       border-radius: 20px;
       padding: 30px;
       display: flex;
       flex-direction: row;
       gap: 20px;
       @media screen and (max-width: 600px) {
         flex-direction: column;
       }
     `,
   
    TransactionCardMain : styled.div`
       .receipt {
        flex-direction: column;
        button {
          margin: 10px;
          width: 200px;
        }
        img {
          max-height: 70vh;
        }
       }
     `,
   
    WalleyStoreBody : styled.div`
       width: 100%;
       padding: 0px 8px;
       &>.txn {
         text-align: left;
         font-size: 15px;
         font-weight: 600;
         padding: 20px 0px 0px 0px;
       }
     `,
    WalleyButtonRow: styled.div`
       display: flex;
       flex-direction: row;
       gap: 10px;
       text-align: center;
       justify-content: center;
       padding: 5px 0px;
    `,
    TransactionModal: styled.div`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000000;
      background: rgb(66, 66, 66, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      test-align: center;
      &>div {
        flex-direction: column;
        width: 500px;
        background: rgb(66, 66, 66);
        text-align: left;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 500px) {
          width: 90vw;
        }
      }
    `,
   }
export function LinktreeBOS() {
    return (
        <Container>
            <VmComponent
                src="shuami.near/widget/walley"
                props={{ Styles, toast: (type: 'INFO' | 'ERROR' | 'SUCCESS', title: string, description: string) =>
                  openToast({
                    type,
                    title,
                    description,
                    duration: 10000
                  }) }}
            />
        </Container>
    )
}
