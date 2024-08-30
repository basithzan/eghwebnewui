"use client"

import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = ({ className, iconClassName = null }) => {
    return (
        <div className={`${className}`}>
            <SocialIcon target='blank' bgColor='transparent' className={`${iconClassName}`} url="https://www.facebook.com/profile.php?id=61560059797064" network='facebook' />
            <SocialIcon target='blank' bgColor='transparent' className={`${iconClassName}`} url="https://www.linkedin.com/company/103232854/admin/feed/posts/" network='linkedin' />
            <SocialIcon target='blank' bgColor='transparent' className={`${iconClassName}`} url="https://www.instagram.com/elitegroupholding/" network='instagram' />
            {/* <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='youtube' />
            <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='twitter' /> */}
        </div>
    );
}

export default SocialLinks;
