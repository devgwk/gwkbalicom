import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Image from 'next/image';


import SectionSeparator from 'components/SectionSeparator'
import Container from 'components/BlogContainer'
import Layout from 'components/Layout'

export interface TheEventsProps {
    preview?: boolean
    loading?: boolean

}


export default function TheEvents(props) {
    const { loading, promos, settings, preview } = props

    return (

        <div>
            <Layout loading={loading} preview={preview}>

                <Container>


                    <div className='p-10'>

                        <div className="pt-12">
                            <h1 className="mb-12 text-center text-xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl">
                                The Events
                            </h1>
                            <SectionSeparator />
                        </div>
                        <div>The Park content goes here <br></br><br></br></div>
                        <div>
                            Section:<br></br><br></br>
                            - Gathering<br></br>
                            - Group Lunch/Dinner<br></br>
                            - Wedding (outdoor/semi-outdoor)<br></br>
                            - Concerts<br></br>
                            - Sports event<br></br>
                            - Others
                        </div>
                    </div>

                </Container>

            </Layout>

        </div >

    )

}

