'use client'

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js'; // Import the User type

export function useSupabaseUser() {
    const [user, setUser] = useState<User | null>(null); // Specify the type

    useEffect(() => {
        async function fetchUser() {
            const supabase = createClient();
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        }

        fetchUser();
    }, []);

    return user;
}
