import React from 'react'
import { Route } from "react-router-dom";

const Main = (props) => {
    const { Component, Layout } = props;

    return(
        <Route
            render={(matchProps) =>
                <Layout>
                    <Component {...matchProps} />
                </Layout>
           }
        />  
    )
  
}

export default Main