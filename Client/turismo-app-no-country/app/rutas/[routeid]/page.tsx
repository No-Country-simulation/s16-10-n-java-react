const page = async ({ params }: { params: { routeid: string } }) => {

    const { routeid } = params;

    

    return <div>page{` ${params.routeid}`}</div>;
};

export default page;
