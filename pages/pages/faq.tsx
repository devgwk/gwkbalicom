import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Image from 'next/image';

import Faq from "react-faq-component";

import SectionSeparator from 'components/SectionSeparator'

import Container from 'components/BlogContainer'
import Layout from 'components/Layout'


const data = {
    title: "Tentang lokasi, jam operasional, transportasi",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
    ],

};

const data2 = {
    title: "Harga tiket masuk, inklusi, harga Statue Tour",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
    ],

};

const data3 = {
    title: "...",
    rows: [
        {
            title: "...",
            content: `...`,
        },        
    ],

};

const styles = {
    // bgColor: 'white',
    titleTextColor: "#171923",
    rowTitleColor: "#171923",
    rowContentColor: "rgb(120,113,108)",
    //rowContentColor: 'grey',
    arrowColor: "#171923",
};

const config = {
    // animate: true,
    // // arrowIcon: "V",
    // tabFocus: true
};



export default function FAQ(props) {

    const { loading, promos, settings, preview } = props

    return (

        <Layout loading={loading} preview={preview}>


            <Container>

                <div className='p-10'>

                    <div className="pt-12">
                        <h1 className="mb-12 text-center text-xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl">
                            F.A.Q
                        </h1>
                        <SectionSeparator />
                    </div>

                    <div className='pb-8'>
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>

                    <div className='pb-8'>
                        <Faq
                            data={data2}
                            styles={styles}
                            config={config}
                        />
                    </div>

                    <div className='pb-8'>
                        <Faq
                            data={data2}
                            styles={styles}
                            config={config}
                        />
                    </div>

                    <div className='pb-8'>
                        <Faq
                            data={data3}
                            styles={styles}
                            config={config}
                        />
                    </div>

                </div>

            </Container>


        </Layout>
    )

}
