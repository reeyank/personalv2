import AppleMusicCard, { Root } from "@/components/ui/applemusic";
import ReactPlayer from "react-player";

export default async function Page() {
  return (
    <div className="mt-4 m-4 lg:flex lg:justify-between">
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-12">
        <div className="lg:flex lg:flex-col lg:flex-1 lg:mt-0 lg:m-0 lg:justify-center lg:text-center">
          <div>
            <h1 className="text-3xl font-[500] m-2">Hello, world!</h1>
            <h2 className="text-2xl font-bold m-2">Welcome to my portfolio!</h2>
            <h1 className="text-6xl font-extrabold m-2">Reeyan Khimani</h1>
          </div>

          <AppleMusicCard />

          <div>
            <h2>Software Developer, College Student</h2>
            <div className="bg-green-700 items-end">ICONS</div>
          </div>
        </div>
      </div>

      <div className="flex-1 backdrop-blur-md">
        <h3>A little bit about me!! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, quasi obcaecati sit vel dignissimos accusantium dolorum animi, explicabo magni eligendi cumque sed maxime beatae ex unde sint voluptas iusto pariatur nostrum. Consectetur doloribus nulla sunt dolor, non alias ipsum praesentium, repellat voluptate laborum dicta ratione repudiandae. Cumque earum recusandae nostrum minima enim! Quam expedita fugiat cumque earum natus ducimus autem nemo vitae nisi magnam at asperiores possimus quibusdam sit iusto ab voluptatem soluta quas placeat, molestiae ut. Iure incidunt odit ut nemo minus nihil libero nobis laboriosam! Consequatur ut dolores fugit minus quia. Molestias, quia? Expedita non ad nam aut.</h3>
        
        <h2>Experiences</h2>
        <h3>Software Developer Intern at XYZ</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aut ipsam cumque velit cupiditate itaque nesciunt soluta distinctio aspernatur sapiente eius odit a porro laudantium nihil dolores recusandae quaerat corrupti dolore excepturi, placeat quae enim? Quis vel odio porro ab excepturi vero vitae rerum, consequuntur ipsum, quos consequatur consectetur architecto. Earum sit dignissimos nesciunt quae dolor libero labore, velit et molestias error quo quis sunt eligendi harum blanditiis. Sit consequatur ipsa, aut nihil officiis culpa velit laborum quasi dolores unde voluptate! Quisquam sint, aspernatur quibusdam autem sunt placeat aliquam architecto consequuntur molestiae nemo eveniet enim ipsum dolor tempora explicabo. Molestias.</p>
      
        <h3>Software Developer Intern at XYZ</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aut ipsam cumque velit cupiditate itaque nesciunt soluta distinctio aspernatur sapiente eius odit a porro laudantium nihil dolores recusandae quaerat corrupti dolore excepturi, placeat quae enim? Quis vel odio porro ab excepturi vero vitae rerum, consequuntur ipsum, quos consequatur consectetur architecto. Earum sit dignissimos nesciunt quae dolor libero labore, velit et molestias error quo quis sunt eligendi harum blanditiis. Sit consequatur ipsa, aut nihil officiis culpa velit laborum quasi dolores unde voluptate! Quisquam sint, aspernatur quibusdam autem sunt placeat aliquam architecto consequuntur molestiae nemo eveniet enim ipsum dolor tempora explicabo. Molestias.</p>

        <h3>Software Developer Intern at XYZ</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aut ipsam cumque velit cupiditate itaque nesciunt soluta distinctio aspernatur sapiente eius odit a porro laudantium nihil dolores recusandae quaerat corrupti dolore excepturi, placeat quae enim? Quis vel odio porro ab excepturi vero vitae rerum, consequuntur ipsum, quos consequatur consectetur architecto. Earum sit dignissimos nesciunt quae dolor libero labore, velit et molestias error quo quis sunt eligendi harum blanditiis. Sit consequatur ipsa, aut nihil officiis culpa velit laborum quasi dolores unde voluptate! Quisquam sint, aspernatur quibusdam autem sunt placeat aliquam architecto consequuntur molestiae nemo eveniet enim ipsum dolor tempora explicabo. Molestias.</p>
        
        <h2>Projects</h2>
        <h3>Software Developer Intern at XYZ</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aut ipsam cumque velit cupiditate itaque nesciunt soluta distinctio aspernatur sapiente eius odit a porro laudantium nihil dolores recusandae quaerat corrupti dolore excepturi, placeat quae enim? Quis vel odio porro ab excepturi vero vitae rerum, consequuntur ipsum, quos consequatur consectetur architecto. Earum sit dignissimos nesciunt quae dolor libero labore, velit et molestias error quo quis sunt eligendi harum blanditiis. Sit consequatur ipsa, aut nihil officiis culpa velit laborum quasi dolores unde voluptate! Quisquam sint, aspernatur quibusdam autem sunt placeat aliquam architecto consequuntur molestiae nemo eveniet enim ipsum dolor tempora explicabo. Molestias.</p>
      
        <h3>Software Developer Intern at XYZ</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aut ipsam cumque velit cupiditate itaque nesciunt soluta distinctio aspernatur sapiente eius odit a porro laudantium nihil dolores recusandae quaerat corrupti dolore excepturi, placeat quae enim? Quis vel odio porro ab excepturi vero vitae rerum, consequuntur ipsum, quos consequatur consectetur architecto. Earum sit dignissimos nesciunt quae dolor libero labore, velit et molestias error quo quis sunt eligendi harum blanditiis. Sit consequatur ipsa, aut nihil officiis culpa velit laborum quasi dolores unde voluptate! Quisquam sint, aspernatur quibusdam autem sunt placeat aliquam architecto consequuntur molestiae nemo eveniet enim ipsum dolor tempora explicabo. Molestias.</p>

        <h3>Software Developer Intern at XYZ</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aut ipsam cumque velit cupiditate itaque nesciunt soluta distinctio aspernatur sapiente eius odit a porro laudantium nihil dolores recusandae quaerat corrupti dolore excepturi, placeat quae enim? Quis vel odio porro ab excepturi vero vitae rerum, consequuntur ipsum, quos consequatur consectetur architecto. Earum sit dignissimos nesciunt quae dolor libero labore, velit et molestias error quo quis sunt eligendi harum blanditiis. Sit consequatur ipsa, aut nihil officiis culpa velit laborum quasi dolores unde voluptate! Quisquam sint, aspernatur quibusdam autem sunt placeat aliquam architecto consequuntur molestiae nemo eveniet enim ipsum dolor tempora explicabo. Molestias.</p>
      </div>
    </div>
  )
}