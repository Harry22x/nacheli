import HouseCard from '../Components/HouseCard'
import './Home.css'

function Home(){
    const houses = [
        {
            id:1,
            title:'5 Bed House with En Suite at Off Bogani Road',
            price:'Ksh. 530,000 Per Month',
            thumbnail:'https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/d2806032d75c1e7a097f7fb3fa47beff/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702435/705a74dd-e042-4c33-a501-42c06d1eaf22.jpg',
            bed:5,
            bath:5,
            size:'0.25 Acres',
            location:'Off Bogani Road, Kasuku Drive, Karen',
            description:`5-bedroom house for rental in Karen

Kshs 530k p.m. (service charge, security, and gardening included)

This luxurious all-en-suite house has a spacious DSQ in a secure gated community of 2 and is situated in Karen off Bogani Road.

Main Features Include

A spacious lounge and dining
Open plan kitchen fitted with an oven microwave and tabletop cooker
Guest wing 1-bedroom ensuite
Family/entertainment room
Private garden
Shared swimming pool
Open carport for 3 cars
Balcony in all bedrooms
Solar backup for the entire house
Borehole

One-bed guest wing with 2 bathrooms

This house is situated in a serene neighborhood with proximity to international schools, shopping malls, and hospitals,`,
images:[
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/d2806032d75c1e7a097f7fb3fa47beff/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702435/705a74dd-e042-4c33-a501-42c06d1eaf22.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/c4c4af29b481a1cf71c9235793fffddc/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702534/457861a7-1ba5-47f0-8021-bb2f3ed32a62.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/6b93a2c08f6183511050c8d3ff35384c/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702548/e0281fbe-0eb7-472a-9ff4-f8f5603f51a6.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/9089624509c0b74cedf1a0877ee8eaf4/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702562/2886f98c-113d-4ea3-9e24-3f298248742c.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/bc20de9e618ebd8e598106c881e35505/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702563/df7bc916-c79a-468e-b79f-5cee235659fb.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/6ef7a82be668445fce4e10f21d9111f0/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702577/2d7722e8-48ca-4930-8a35-21e0aeb88461.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/42f1ff152cba9c4954f7e65ed6bdc832/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702593/157b57a3-6517-40f1-9717-91de1c6ec5d6.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/304d143f180f6522d9ce0aac2ea3161e/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702594/76dee63a-f801-4241-bedb-5f3e752a6bc5.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/4962928f066f4c25eb725739c5ad764f/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702597/92315dce-3892-4f40-8c17-01a113e08617.jpg",
    "https://i.roamcdn.net/prop/brk/gallery-full-1200w-watermark/8bddaac0f6e5cd79b645eb8f6302bb81/-eyJvdyI6Ik5hY2hhbGVpIFNpbWNoYSBDbyBMdGQifQ%3D%3D/prod-property-core-backend-media-brk/8702598/f47a4e9c-51c7-46bd-baa9-d196c085fc78.jpg",

]

        }
    ]
    return(
        <>
        <div id='HomeId'>
        <h1 id='FindTitle'>FIND YOUR <br></br> DREAM HOME</h1>
        <img id='Karen1' src="https://realtors.co.ke/wp-content/uploads/2025/09/547751631_122201446202055233_7902266470527715234_n-584x438.jpg"/>
        
        </div>
        <div>
            <h1>Our Listings</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {houses.map(house=>(
                <HouseCard
                price = {house.price}
                title = {house.title}
                location ={house.location}
                bed = {house.bed}
                bath ={house.bath}
                size ={house.size}
                thumbnail ={house.thumbnail}
                id = {house.id}
                images = {house.images}
                description={house.description}
                />
            ))}
            
            
        </div>
        </>
    )
}

export default Home