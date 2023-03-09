import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Image from 'next/image';

import SectionSeparator from 'components/SectionSeparator'

import Container from 'components/BlogContainer'
import Layout from 'components/Layout'




export default function TheStory(props) {

    const { loading, promos, settings, preview } = props

    return (

        <Layout loading={loading} preview={preview}>

            <div>

                <Container>

                    <div className='p-10'>

                        <div className="pt-12">
                            <h1 className="mb-12 text-center text-xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl">
                                The Story
                            </h1>
                            <SectionSeparator />
                        </div>
                        <div className='pb-5'>The Park content goes here<br></br></div>
                        <div>
                            
                            - Video trailer/highlight<br></br>
                            -- [opt 1] trailer perjalanan visitor dari parkir – patung besar (referensi dr video AKB Covid)<br></br>
                            -- [opt 2] highlight proses pembangunan patung-peresmian-konser-fullmoon<br></br><br></br>
                            Section:<br></br>
                            - Deskripsi singkat ttg GWK Cultural Park<br></br>
                            - Nama lokasi di GWK <br></br>
                            – image & deskripsi<br></br>
                            -- PB<br></br>
                            -- Ubud St.<br></br>
                            -- KS<br></br>
                            -- JB<br></br>
                            -- TA<br></br>
                            -- Amphi<br></br>
                            -- ST<br></br>
                            -- PK<br></br>
                            -- PW<br></br>
                            -- PG & LP<br></br>
                            -- FP<br></br>
                            -- P.GWK<br></br>
                            <br></br>
                            CTA button:<br></br>
                            - [1] Buy Ticket<br></br>
                            - [2] Ask a Question<br></br>

                        </div>
                    </div>

                </Container>

            </div >
        </Layout>
    )

}

