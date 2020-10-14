import React from 'react';
import ProfileCard from './../../components/Profile/ProfileCard'

export default () => (
    <main>
        <>
            Map:
            <section className="row">
                {[1,2,3,4,5,6,7].map(item => (
                    <div className="col-12 col-md-6 my-3">
                        <ProfileCard />
                    </div>
                ))}
            </section>
        </>
    </main>
)