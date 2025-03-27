import { titleFont } from '@/config/fonts';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="grid grid-cols-4 grid-rows-5 gap-4 min-h-screen p-4">
            <div className="col-span-3 row-span-5 p-4">
                <h1 className={`${titleFont.className} antialiased text-6xl`}>Sobre Nosotros:</h1>
                <p className='text-lg mt-4 text-pretty'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste consectetur quas quam facere eius vero deleniti, obcaecati eum fuga ipsam architecto. Quibusdam at veniam praesentium doloremque quaerat tempore assumenda in.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque? Eum officia consectetur, perspiciatis quo iste quidem eos quam sunt ratione quis voluptatem adipisci quaerat amet inventore nisi magnam. Harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente doloremque qui. Quam molestias, consectetur voluptatum dolor ipsum rem? Provident voluptatibus est quas dolorem eveniet nobis assumenda. Odit, sint dolorum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est eos blanditiis corrupti tenetur quasi neque laudantium debitis, consequatur incidunt rem maiores non obcaecati esse fugiat ipsum voluptate doloribus dolorum.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora qui ipsam doloremque odio ut, ea blanditiis quam officiis officia nihil neque voluptas consequuntur eaque! Eum debitis temporibus vero qui sit?
                    <br />
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis consequuntur voluptatem obcaecati suscipit laudantium excepturi ipsum aspernatur, tempore, voluptates nesciunt ullam, inventore placeat perferendis laboriosam cumque beatae doloremque! Autem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi ullam magnam neque dolorum voluptatum earum debitis rem iusto incidunt dolorem nisi iure, in ducimus inventore quia dolores sint minus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aperiam nisi veniam earum quidem distinctio consectetur quo, eveniet ut natus reprehenderit labore similique ea, facilis non maiores eaque sit sapiente!
                    <br />
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias exercitationem, saepe asperiores, reprehenderit praesentium rem ullam excepturi cum repellendus officiis perspiciatis magni, omnis dolores error? Molestiae aliquam ullam consectetur!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quasi. Harum quae fugit doloremque at mollitia quidem eveniet, quo, alias eos, expedita pariatur. Enim tempore est quasi voluptatum ut? Repellat.
                </p>
            </div>
            <div className="md:flex items-center row-span-5 col-start-4 overflow-hidden rounded-xl">
                <Image
                    src={'/us.webp'}
                    alt="Imagen de nosotros"
                    width={400}
                    height={1200}
                />
            </div>
        </div>

    );
}
