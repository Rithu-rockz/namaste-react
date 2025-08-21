rafce
-create syn of component

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




