"use client"

import { useState, useRef, useEffect } from "react"
import { Bell, MessageSquare, ShoppingBag, X } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface Notification {
  id: string
  type: 'message' | 'order' | 'promotion'
  title: string
  message: string
  time: string
  read: boolean
}

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from customer support',
      time: '2 min ago',
      read: false
    },
    {
      id: '2',
      type: 'order',
      title: 'Order Update',
      message: 'Your order #12345 has been shipped',
      time: '1 hour ago',
      read: false
    },
    {
      id: '3',
      type: 'promotion',
      title: 'Special Offer',
      message: 'Get 20% off on your next purchase',
      time: '3 hours ago',
      read: true
    }
  ])
  const [slidingNotifications, setSlidingNotifications] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowNotificationModal(false)
      }
    }

    if (showNotificationModal) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showNotificationModal])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    // Add sliding animation
    setSlidingNotifications(prev => [...prev, id])
    
    // Remove notification after animation
    setTimeout(() => {
      setNotifications(prev => prev.filter(notification => notification.id !== id))
      setSlidingNotifications(prev => prev.filter(notificationId => notificationId !== id))
    }, 300)
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    )
  }

  const openNotificationModal = (notification: Notification) => {
    setSelectedNotification(notification)
    setShowNotificationModal(true)
    setIsOpen(false)
  }

  const closeNotificationModal = () => {
    setShowNotificationModal(false)
    setSelectedNotification(null)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case 'order':
        return <ShoppingBag className="h-4 w-4 text-green-500" />
      case 'promotion':
        return <Bell className="h-4 w-4 text-purple-500" />
      default:
        return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'message':
        return 'border-l-blue-500'
      case 'order':
        return 'border-l-green-500'
      case 'promotion':
        return 'border-l-purple-500'
      default:
        return 'border-l-gray-500'
    }
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {/* Notification Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-200"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-purple-600 hover:text-purple-700 font-medium transition-colors duration-150"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-64 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="px-4 py-8 text-center">
                  <Bell className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No notifications</p>
                </div>
              ) : (
                <div className="py-1">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 border-l-4 ${getNotificationColor(notification.type)} ${
                        !notification.read 
                          ? 'bg-blue-50' 
                          : 'hover:bg-gray-50'
                      } transition-all duration-300 cursor-pointer overflow-hidden ${
                        slidingNotifications.includes(notification.id) 
                          ? 'transform translate-x-full opacity-0' 
                          : ''
                      }`}
                      onClick={() => openNotificationModal(notification)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`text-sm font-medium ${
                              !notification.read ? 'text-gray-900' : 'text-gray-600'
                            }`}>
                              {notification.title}
                            </p>
                            <span className="text-xs text-gray-400">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="border-t border-gray-100 px-4 py-2">
                <LocalizedClientLink
                  href="/notifications"
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  View all notifications
                </LocalizedClientLink>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Notification Detail Modal */}
      {showNotificationModal && selectedNotification && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50" style={{ margin: 0 }}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-in slide-in-from-top-2 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                  {getNotificationIcon(selectedNotification.type)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{selectedNotification.title}</h3>
              </div>
              <button
                onClick={closeNotificationModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-4">{selectedNotification.message}</p>
              <p className="text-sm text-gray-400">{selectedNotification.time}</p>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  markAsRead(selectedNotification.id)
                  closeNotificationModal()
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-150"
              >
                Mark as Read
              </button>
              <button
                onClick={closeNotificationModal}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-150"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 