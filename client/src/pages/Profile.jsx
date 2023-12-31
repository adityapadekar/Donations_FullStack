import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

export default function Profile() {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCompaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getUserCompaigns();
        setCampaigns(data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <DisplayCampaigns
            title="My Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    );
}
