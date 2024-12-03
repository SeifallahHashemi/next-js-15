import React from 'react';
import Form from "next/form";

const FeatureOnePage = () => {
    return (
        <div className={"min-h-screen flex justify-center items-center"}>
            <Form action={'/search'}>
                <input type="text" name={"userId"} placeholder={"please enter user id"}/>
                <button type={"submit"}>submit</button>
            </Form>
        </div>
    );
};

export default FeatureOnePage;