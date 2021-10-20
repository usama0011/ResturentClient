import router, { useRouter } from "next/router";
function index() {
  const router = useRouter();
  return (
    <div className=" max-w-6xl mx-auto pl-5 pr-5">
      <div className="pt-32">
        <div class="sm:text-center mx-4 lg:text-left w-full">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Hotely </span>
            <span class="block text-primary-color xl:inline">
              online business
            </span>
          </h1>
          <p className="pt-10">Last Updated:October,11,2021</p>
          <p class="mt-3 text-lg text-gray-500 sm:mt-5  sm:max-w-xl md:mt-5  lg:mx-0">
            Some hotels require you to cancel more than 24 hours before
            check-in. Details on site. © 2021 Hotely.com is an Expedia Group
            company. All rights reserved. Hotely.com and the Hotely.com logo are
            trademarks or registered trademarks of Hotely.com, LP in the France
            and/ or other countries. All other trademarks are the property of
            their respective owners.
          </p>
          <p class="mt-3 text-lg text-gray-500 sm:mt-5   md:mt-5  lg:mx-0">
            Some hotels require you to cancel more than 24 hours before
            check-in. Details on site. © 2021 Hotely.com is an Expedia Group
            company. All rights reserved. Hotely.com and the Hotely.com logo are
            trademarks or registered trademarks of Hotely.com, LP in the France
            and/ or other countries. All other trademarks are the property of
            their respective owners.
          </p>
          <p className="pt-10">
            Links to Other Webistes of our Hotely bussness
          </p>
          <p class="mt-3 text-lg text-gray-500 sm:mt-5   md:mt-5  lg:mx-0">
            Some hotels require you to cancel more than 24 hours before
            check-in. Details on site. © 2021 Hotely.com is an Expedia Group
            company. All rights reserved. Hotely.com and the Hotely.com logo are
            trademarks or registered trademarks of Hotely.com, LP in the France
            and/ or other countries. All other trademarks are the property of
            their respective owners. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus sapiente quam amet omnis, aliquid
            voluptas quos culpa harum provident dolorem, ipsam cum! Ullam
            deserunt maxime sapiente ea quis praesentium dignissimos laboriosam,
            aut reiciendis ducimus ipsum unde exercitationem, laborum sit.
            Deleniti alias, repudiandae suscipit doloribus architecto eum rem
            harum illum similique.
          </p>
          <p className="pt-10">Governing Laws</p>
          <p class="mt-3 text-lg text-gray-500 sm:mt-5   md:mt-5  lg:mx-0">
            Some hotels require you to cancel more than 24 hours before
            check-in. Details on site. © 2021 Hotely.com is an Expedia Group
            company. All rights reserved. Hotely.com and the Hotely.com logo are
            trademarks or registered trademarks of Hotely.com, LP in the France
            and/ or other countries. All other trademarks are the property of
            their respective owners. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus sapiente quam amet omnis, aliquid
            voluptas quos culpa harum provident dolorem, ipsam cum! Ullam
            deserunt maxime sapiente ea quis praesentium dignissimos laboriosam,
            aut reiciendis ducimus ipsum unde exercitationem, laborum sit.
            Deleniti alias, repudiandae suscipit doloribus architecto eum rem
            harum illum similique.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start md:mx-0 lg:mx-0">
            <div class="rounded-md shadow">
              <a
                onClick={() => router.push("/")}
                href="/"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                onClick={() => router.push("/")}
                href="/"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Accept All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
