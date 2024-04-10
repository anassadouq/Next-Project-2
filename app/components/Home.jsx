import Link from 'next/link';

export default function Home() {
    return (
        <div class="bg-white">
            <div class="relative isolate px-2 lg:px-8">
                <div class="mx-auto max-w-2xl py-10 sm:py-10 lg:py-20">
                    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                        
                    </div>
                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
                        <Link href="/" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
                    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
                </div>
            </div>
        </div>
    )
}