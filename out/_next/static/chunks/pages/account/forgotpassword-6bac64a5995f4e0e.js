(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{86785:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/forgotpassword",function(){return n(42139)}])},35284:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var s=n(58087),a=n(11163);let i=()=>{let e=(0,a.useRouter)(),t=()=>e.push(s.u.HOME),n=()=>e.push(s.u.Login),i=()=>e.push(s.u.Signup),u=()=>e.push(s.u.ForgotPassword),r=()=>e.push(s.u.ManualSignUp),o=()=>e.push(s.u.ChangePassword),l=t=>e.push({pathname:"".concat(s.u.NewEmail),query:{email:t}},"".concat(s.u.NewEmail)),c=()=>e.push(s.u.SentEmail);return{goToHome:t,goToLogin:n,goToSignup:i,goToForgotPassword:u,goToManualSignUp:r,goToChangePassword:o,goToNewEmail:l,goToSentEmail:c}}},58087:function(e,t,n){"use strict";var s,a;n.d(t,{u:function(){return s}}),(a=s||(s={})).HOME="/",a.Login="/account/login",a.Signup="/account/signup",a.ManualSignUp="/account/manualsignup",a.ForgotPassword="/account/forgotpassword",a.ChangePassword="/account/changepassword",a.NewEmail="/account/newemail",a.SentEmail="/account/sentemail"},42139:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(35284),i=n(67294);let u=()=>{let{goToNewEmail:e}=(0,a.c)(),[t,n]=(0,i.useState)("");return(0,s.jsx)("div",{className:"flex justify-center items-center bg-slate-300 w-full h-[100vh]",children:(0,s.jsxs)("div",{className:"w-[424px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-[#2F4644] text-center text-[22px] font-medium not-italic leading-[22px]",children:"Forgot your password?"}),(0,s.jsx)("div",{className:"text-[#658885] text-center text-base font-normal not-italic mt-6",children:"Please enter your email address below to receive an email with instructions on how to reset your password in just a few minutes."})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("div",{className:"text-[#2F4644] text-base font-semibold mb-2",children:"Email Address"}),(0,s.jsx)("input",{type:"email",id:"email",onChange:e=>n(e.target.value),className:"bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl",placeholder:"Enter your email address",required:!0}),!t.includes("@")&&""!==t&&(0,s.jsx)("div",{className:"text-[#E24747] pl-3 mt-2 font-normal text-xs leading-[180%",children:"Email is not valid"})]}),(0,s.jsx)("div",{className:"w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer",onClick:()=>e(t),children:"Send Instructions"})]})})};t.default=u},11163:function(e,t,n){e.exports=n(80880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=86785)}),_N_E=e.O()}]);