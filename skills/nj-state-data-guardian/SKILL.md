---
name: nj-state-data-guardian
description: Guidelines for managing frontend global state, data fetching, caching, and optimistic UI updates using React Query (TanStack Query) and Zustand. Prevents prop-drilling and ensures robust error/loading handling. Use when integrating APIs or managing complex UI states.
---

# NJ State Data Guardian

## Purpose
Guidelines for managing frontend global state, data fetching, caching, and optimistic UI updates using React Query (TanStack Query) and Zustand. Prevents prop-drilling and ensures robust error/loading handling. Use when integrating APIs or managing complex UI states.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "fetch data from the backend", "integrate the API", or "show a loading state".
2. The user wants to "manage global state", "avoid prop drilling", or "save the user's preferences".
3. The user mentions "React Query", "SWR", "Zustand", or "Redux".

## Operational Instructions

### 1. Data Fetching & Caching (React Query)
Always use TanStack React Query (or SWR) for fetching asynchronous server state. Do not use plain `useEffect` for data fetching unless explicitly requested.

**Example Recipe:**
```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Fetching Data
export function useUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await fetch(`/api/users/${userId}`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}
```

### 2. Optimistic UI Updates
When mutating data (e.g., liking a post, deleting an item), update the UI immediately before the server responds to create a fast, snappy experience.

**Example Recipe:**
```typescript
export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => fetch(`/api/posts/${postId}/like`, { method: 'POST' }),
    onMutate: async (postId) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      const previousPosts = queryClient.getQueryData(['posts']);
      
      // Optimistically update
      queryClient.setQueryData(['posts'], (old: any) => 
        old.map((p: any) => p.id === postId ? { ...p, likes: p.likes + 1 } : p)
      );
      
      return { previousPosts };
    },
    onError: (err, newTodo, context) => {
      // Rollback on failure
      queryClient.setQueryData(['posts'], context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
```

### 3. Global UI State (Zustand)
For client-side UI state (e.g., sidebar open/close, dark mode, multi-step form data), use Zustand instead of React Context.

**Example Recipe:**
```typescript
import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
```

## Strict Guardrails
- **NEVER** use `useEffect` for data fetching. Always use React Query or SWR to handle caching, retries, and race conditions.
- **NEVER** pass props down more than 2 levels (prop-drilling). Use Zustand for global UI state.
- **NEVER** leave a UI waiting for a simple mutation. Always implement Optimistic UI updates for binary actions (like, bookmark, toggle, delete).
