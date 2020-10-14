import React from 'react';
import ProfileCard from './../../components/Profile/ProfileCard';
import { DataContext } from '../../App'
import lodash from 'lodash';

export default () => {
    const data = React.useContext(DataContext)

    // avoiding double rendering
    if (lodash.isArray( data.data )) {
        // console.log(data.data);
        // console.log(data.ad);
        return (
            <main>
                <>
                    <div className="alert alert-secondary" role="alert">
                        <div>
                            <strong>
                                <a href={ data.ad.url }>{ data.ad.company }</a>
                            </strong>{' '}
                            <span className="badge badge-info">AD</span>
                        </div>
                        { data.ad.text }
                    </div>
                    <h1 className="mt-4">{ data.data.length } 🐈 are here</h1>
                    <section className="row">
                        {data.data.map( (item, key) => (
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