export default function Footer() {
    const menus = ['Contact','About Us','Privacy Plicy','Terms & Conditions'];

    return(
        <div>
            <ul className="flex justify-center gap-4">
                {menus.map((menu, i) => 
                    <li key={i} className='text-gray-500'>{menu}</li>
                )}
            </ul>
        </div>
    );
}
