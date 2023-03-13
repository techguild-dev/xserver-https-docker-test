export default function Test(){

    //index.tsxに遷移する関数
    const handleClick = () => {
        window.location.href = "/my-app"
    }

    return (
        <>
            <h1>Test</h1>
            <button onClick={handleClick}>index.tsxに遷移</button>
        </>
    )
}