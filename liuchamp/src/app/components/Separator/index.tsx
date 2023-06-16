export default function Separator({mt}:{mt:string}): JSX.Element {
    return (
        <div className="w-full h-max px-8">
            <div className={`w-full h-[1px]  bg-custom-whitePalo ${mt} m-auto rounded-sm sm:hidden`}></div>
        </div>
    );
}
