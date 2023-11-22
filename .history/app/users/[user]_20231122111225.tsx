import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter, useSearchParams } from "expo-router";
import { Button, H3, H6, XStack } from "tamagui";

import DialogDemo from "../../components/DialogDemo";
import { MyStack } from "../../components/MyStack";
import SelectDemo from "../../components/SelectDemo";
import SpinnerDemo from "../../components/SpinnerDemo";
import SwitchDemo from "../../components/SwitchDemo";


import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
// import 
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { Session } from '@supabase/supabase-js'

export default function User() {
  const router = useRouter();
  const params = useSearchParams();
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  return (
    <MyStack justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$2"
      >
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <H3>{params.user}&apos;s user page</H3>
      </XStack>

      <H6>Some Tamagui components in action.</H6>
       {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
      </MyStack>
  );
}
