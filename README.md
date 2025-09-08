rafce
-create syn of component

capital letter - component
custom react hook - start with use(camel case)

useEffect
-2 params
--callback function()=>{}
--dependency array[]
->this is not mandatory
no dependency array - func called everytime
empty dependency array - func called just once duting initial render
something in dependency array - func called during inital render and when the behaviour updates/changes

Dont's
-useState should be created only inside the component (i.e) local state variable inside the functional component
-use this initially inside the component to avoid inconsistency and js is sync sigle threaded appln so code runs accordingly
-though js allows dont use this inside loops(if or ifelse condn, for), func as it dont make sense

React router dom
---if we havent used any error page router dom will provide that by default
createBrowserRouter
-will create react routing for config
RouterProvider
-will add to render the component
useRouteError
-this is a hook gn by react dom to give detail msg about the error

Header intact and create children routes
-Outlet is used and load the children routes based on the path.
-this is used in appLayout along with header component

Most imp
to make link dont use <a>tag bcs it refresh the entire page instead use <Link to=""> tag this will not reload instead the component alone changes accordingly.
that is why single page appln or single page component.

ROUTING
-server side routing
traditional way where we have .html for each component and when called it makes a network api call and fetch and load accordingly i.e refresh the entire page like using <a>
-client side routing
no network api calls, just load the component <link> that is why single side appln or component
-dynamic path
/:name

--------res menu card routing
-API-useeffect
list
-destructure, map

------------class based components
class component name extends React.Component---syntax
diff
this have render method which return piece of jsx - function comp is a function that return piece of jsx
class component name extends React.Component{
render(){
return();
}
}
if we pass properties through component then here constructor receives it as props and super(proprs) so this can be accessed as this.props.name or it should be desctructured before so can be used as {name}
-Imp
never directly update state variable in class as same as function comp
state variable is a big obj..... react updates whatever is given only in set state and remains untouch the remaining variables.
render-while rendering constructor renders first and then render method renders
if parent is also class based same happends parent constructor, parent render, child constructor, child renders
one more ComponentDidMount this will be called after render method is called
lifecycle of class-
constructor,
render,
componentdidmount - to make API call this is used. why?
like we learnt before component is render->API call->Rerender(fill data from API) like we have useEffect for function based

case:
if parent have 2 child then
Parent constructor called
parent render
1st child constructor // render phase
1st child render
2nd child constructor
2nd child fender
1st child component did mount // commit phase - this happens bcs Render phase {constructor, render}is done for 1st child then if it checks there sis 2nd child then it batch component di monut of both child which is commit stage that is why they are executed after 2nd child render - this is because DOM manipulation is expensive so it batches and executes

2nd child component did mount
parent component did mount

conclusion---Mounting
constructor(dummy data)
render(dummy) -<html>
componentdidmount
API call
this.setstate -> state variables is updated

---updating
render(api data)

<html>
componentdid update - we have this as well called after componentdidmount
componentwillUnmount - this will be called when we move to other page

h.w
super props
Ans: this.props it allows this to be intialized properly and allowing them to access via this.props safely

learnings:
if changes didnt update or after running any other command run proj again to see update

epi-09 optimising our app
Single responsibility - code breks in to small modules
-easy to test
-easy to maintain
-resusable
to achieve this we can create custom hook but -this is not mandatory

custom Hooks
-utility functions
-before creating first get to know what is input and output for ex in useRestaurantMenu file it takes id as inout and return resinfo

parcel bundles everything into single js file and give it to browser, when there are many components this becomes difficult
-chunking
-lazy loading
-dynamic bundles
-code splitting
-dynamic import
-ondemand loading - load the component whenever required this didnt work if we do normal import
-----------lazy is a func gn by react for this
ex const componentname = lazy(()=>{
import("path of component")
});
so this creates sep js file ->network tab and in dist file
----while clicking on grocery component it takes time to fetch code so it throws error in console, to handle this we have suspense component
wrap it inside so that it works fine

sass and scss in css
styled components

epi -10
Tailwind css
this support all libraries like react, html etc...install accordingly
ex: check under framework guide ->parcel
-tailwind css use post css as this used to transform css inside js
-if we need to give hard coded size then we can mention as w-[200px]
-though there are many available bundler will load only required css for our project i.e lightweight so easy to load
-main adv everything goes in flow, no need to go back nd froth

epi-11
-Higher order component
a function that takes component and return a func
----this will not modify that component directly instead add something to the top of it like label, any other properties
-UI layer, Data Layer
Data layer (props, state, local variables)
UI layer (JSX data) if we know to handle properly and with good perf of data layer then Ui layer will be super fast
-expand and collapse we have used accordian model, where in this proj setItems is set to true and false in use state.
imp..... while expanding one and try to expand the other the first one should be closed
react developer tools help to show all the components what are the props used basically data layer, and left side jsx is Ui layer
profiler - record what we do in the ui
-----controlled and uncontrolled component
each component in ItemList have their own state and list of items to be displayed they arent aware about the other ones as child handles all by itself, instead this has to be given to parent component this is called controlled component. where it has to expand or collapse depends on the props sent by parent. if it si not the case then it is said to be uncontrolled component which can do its own like managing state by own.
to do this we can indirectly modify the state varible of parent by child
-if we want to lift the state up if we have to control our children.
--Props drilling
-One way data stream- React-in which datas are passed from parent to its immediate child and from there it is passed to the next child and goes on.
ex: ResMenu(parent)->ResMenuList(child)->ItemLIst(child) we can declare it as const dummy = "dummy data" and can be send as props to its children
<....dummy ={dummy}/> to the last child can be accessed as console.log(dummy)
this is not a good way, avoid props drilling (global data accessing by child ) instead go for context
hooks - useContext
this is mainly used when we want a particular data to be used in many places/pages and can be used as const {props/loggedInUser}=useContext(UserContext)
this will have default value, if we need to modify it then in root component we can do by giving <usercontext.provider(overriding the default value) value={{loggedInUser:userName}}> this should be wrapped in all the component or to where it is needed
check app.js for more info
this is flexible can be used any no of time, nested is also fine
to update live data using the same check body.js input field box
same what context does is redux also does but it is external library...for small and medium appln context can be used
even large appln context is used, but if we use redux it is scalable.
