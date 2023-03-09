import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Image from 'next/image';

import SectionSeparator from 'components/SectionSeparator'

import Container from 'components/BlogContainer'
import Layout from 'components/Layout'




export default function CulturalHeritage(props) {

    const { loading, promos, settings, preview } = props

    return (

        <Layout loading={loading} preview={preview}>

            <div>

                <Container>

                    <div className='p-10'>

                        <div className="pt-12">
                            <h1 className="mb-12 text-center text-xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl">
                                Cultural Heritage
                            </h1>
                            <SectionSeparator />
                        </div>
                        <div>The Park content goes here<br></br><br></br></div>
                        <div>
                            Section<br></br>
                            - Video Trailer atau Hand Drawing Sketsa Tari<br></br>
                            <br></br>
                            Section<br></br>
                            Introduction tentang Bali’s Cultural Heritage<br></br>
                            <br></br>
                            Section<br></br>
                            "- Tarian di GWK – image & deskripsi<br></br>
                            <br></br>
                            CTA button:<br></br>
                            [1] Buy Ticket<br></br>
                            [2] Stroll The Park<br></br>
                            [3] Ask a Question<br></br>
                        </div>
                    </div>

                </Container>

            </div >
        </Layout>
    )

}

