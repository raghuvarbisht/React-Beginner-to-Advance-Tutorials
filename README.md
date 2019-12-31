# React-Beginner-to-Advance-Tutorials
> Please click :star: if you like the project. Pull Request are highly appreciated.
   
1.  What is React?

    React is an **open-source frontend JavaScript library** which is used for building user interfaces especially for single page applications. It follows the component based approach which helps in building reusable UI components. It is used for creating complex and interactive web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.
    
2.  What are the major features of React?

    The major features of React are:

    * It uses **VirtualDOM** instead of RealDOM considering that RealDOM manipulations are more expensive compare to Virtual Dom.
    * React also supports **server side rendering**.
    * It follows **Unidirectional** data flow or data binding.
    * Uses **reusable/composable** UI components to develop the view.


3.  What is Virtual DOM?

    A virtual DOM is a lightweight JavaScript object. The virtual DOM is only a virtual representation of the DOM. Everytime the state of application changes, the virtual DOM gets updated instead of the real DOM.

    The *Virtual DOM* works in three simple steps.

    1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
        (public/images/vdom1.png)

    2. Then the difference between the previous DOM representation and the new one is calculated.
        (public/images/vdom2.png)

    3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.
        (public/images/vdom3.png)
  
