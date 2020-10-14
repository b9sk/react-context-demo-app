import React from 'react';
import ProfileCard from './../../components/Profile/ProfileCard';
import { DataContext } from '../../App'
import lodash, { shuffle } from 'lodash';

export default () => {
    const data = React.useContext(DataContext)
    data.consumedAt = new Date()
    // waiting for a fetch result
    if (lodash.isArray( data.data )) {
        return (
            <main>
                <>
                    <section className="alert alert-secondary" role="alert">
                        <div>
                            <strong>
                                <a href={ data.ad.url }>{ data.ad.company }</a>
                            </strong>{' '}
                            <span className="badge badge-info">AD</span>
                        </div>
                        { data.ad.text }
                    </section>
                    <h1 className="mt-4">{ data.data.length } 🐈 are here</h1>
                    <section className="row">
                        {shuffle(data.data).map( (item, key) => (
                            <div key={item.id} className="col-12 col-md-6 my-3">
                                <ProfileCard data={item} />
                            </div>
                        ))}
                    </section>
                </>
            </main>
        )
    }

    return <></>
}