import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>About page</h2>
            <Image src="/11.avif" width={300} height={300} alt='11.avif'></Image>
            <Image src="/images/My_img.jpg" alt='my-pic' width={300} height={500}></Image>
            <Image src="https://images.unsplash.com/photo-1789464354568-204db6f809f8" alt='my-pic' width={300} height={500}></Image>
        </div>
    );
};

export default AboutPage;