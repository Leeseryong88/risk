'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

export default function FirebaseTest() {
  const [status, setStatus] = useState<string>('테스트 중...');

  useEffect(() => {
    // Firebase Auth 테스트
    const authTest = onAuthStateChanged(auth, (user) => {
      setStatus(prev => prev + '\nFirebase Auth 초기화 성공');
    });

    // Firestore 테스트
    const firestoreTest = async () => {
      try {
        await getDocs(collection(db, 'test-collection'));
        setStatus(prev => prev + '\nFirestore 연결 성공');
      } catch (error) {
        setStatus(prev => prev + '\nFirestore 연결 실패: ' + (error as Error).message);
      }
    };

    firestoreTest();
    
    return () => {
      authTest(); // cleanup auth listener
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Firebase 연결 테스트</h2>
      <pre className="whitespace-pre-wrap">{status}</pre>
    </div>
  );
} 